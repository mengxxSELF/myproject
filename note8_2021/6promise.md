#Promise

## ����״̬  fulfilled failed unfulfilled


promise��һ��ʵ��  Ĭ�ϳ�ʼ̬Ϊunfulfilled δ���

���� resolve ״̬��Ϊ�ɹ�̬ fulfilled
���� reject ״̬��Ϊʧ��̬ unfulfilled


## all ����Ϊ����

��̬���� all
�����������е�promiseʵ�����ɹ����ŵ��óɹ��Ļص�

```
/* ���е�promise������Ĺ�ϵ  ȫ���ص��ɹ��� �ŵ��óɹ��Ļص�  */
Promise.all([p1,p2]).then(function () {
    console.log(arguments)
})
```

## race  ��������

����������һ����promiseʵ���ɹ������óɹ��Ļص�
