import type MarkdownIt from "markdown-it";

const escapeAngles = (s: string) =>
  s
    // 单类型变量 <T>、<E>、<K>、<V>、<U> 等
    .replace(/<\s*([A-Z])\s*>/g, "&lt;$1&gt;")
    // 多类型变量 <T, V> 等
    .replace(/<\s*([A-Z])\s*(?:,\s*[A-Z]\s*)+\s*>/g, match => match.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
    // 具体类型 <String>、<Integer>、<List> 等（首字母大写）
    .replace(/<\s*([A-Z][A-Za-z0-9_]+)\s*>/g, "&lt;$1&gt;")
    // 无界通配符 <?>
    .replace(/<\s*\?\s*>/g, "&lt;?&gt;")
    // 上界通配符 <? extends X>
    .replace(/<\s*\?\s+extends\s+([A-Za-z0-9_]+)\s*>/g, "&lt;? extends $1&gt;")
    // 下界通配符 <? super X>
    .replace(/<\s*\?\s+super\s+([A-Za-z0-9_]+)\s*>/g, "&lt;? super $1&gt;");

/**
 * 逃逸 Java 泛型尖括号，避免 Vue 编译器将其误解析为 HTML 标签
 * 仅处理非代码块、非内联代码、非 HTML 片段中的普通文本
 */
const escapeGenericsPlugin = (md: MarkdownIt) => {
  md.core.ruler.after("normalize", "escape-generics", state => {
    const tokens = state.tokens;
    for (const token of tokens) {
      // 跳过代码块
      if (token.type === "fence" || token.type === "code_block") continue;
      if (token.type !== "inline" || !token.children) continue;
      for (const child of token.children) {
        if (child.type === "text") {
          // 处理普通文本
          child.content = escapeAngles(child.content).replace(/<\s*\/?\s*p\s*>/g, s =>
            s.replace("<", "&lt;").replace(">", "&gt;")
          );
        } else if (child.type === "html_inline") {
          // 转义 javadoc 风格的 <p> 标签，避免未闭合标签错误
          child.content = child.content.replace(/<\s*\/?\s*p\s*>/g, s => s.replace("<", "&lt;").replace(">", "&gt;"));
        }
      }
    }
  });
};

export default escapeGenericsPlugin;
