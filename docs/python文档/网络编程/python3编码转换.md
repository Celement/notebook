```python
text="你好"print(text)
bytetext=text.encode()
print(bytetext)
print(type(bytetext))
print(bytetext.decode())
```

```python
你好
b'\xe4\xbd\xa0\xe5\xa5\xbd'
<class 'bytes'>
你好

```

```python
bytes.decode(encoding="utf-8")
str.encode(encoding="utf-8)
```



