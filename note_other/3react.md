# React



## bower

bower��װ������������ð�װĿ¼��ͨ������.bowerrc
����������directory������bower���ص��ļ��İ�װĿ¼λ��

```
{"directory":"./public/lib"}

```
## ��ҳ������js�ļ�

```
<script src="./bower_components/react/react.js"></script>
<script src="./bower_components/react/react-dom.js"></script>
<script src="./bower_components/babel/browser.js"></script>
<script type="text/babel" src="1react.js"></script>

```
ע�������Լ���js�ļ���Ҫ����type='text/babel'

## react

����dom��ǩ����������Ⱦ��ҳ����



## JSX�﷨

��html css js д��һ����б���
��{ ��ͷ ����js�������


> ��Ⱦ���������ֻ����һ��������ǩ

*  ��������������� ÿһ����Ԫ����Ҫ�Լ�key ����
*  ������ʽ����ͨ�����ַ�ʽ
   * className
   * style={��ʽ����}

```

<span className='weight'></span>

<p style={ { color:'red' } } ></p>
//  ��һ�Դ����� ��ʾʹ��js��������Ķ���
// �ڶ��Դ����� ��ʾ����һ������


// �����ȶ������ʽ����
var stylecoolor ={ color:'red' }
<p style={ stylecoolor } } ></p>


```

## �������

��ҳ��ָ�Ϊ������� ÿ����Ҫ�Լ�����ʽ���߼�

* �����
* ������
* ��ά��

> ������� ReactDOM.createClass({})

* �������Ҫ����ĸ��д
* �������󣬿�������ͨ��DOMԪ��һ��ʹ��


```
var Comp = ReactDOM.createClass({
    render () {
       return  <div>ֻ����һ��������ǩ</div>
    }
})

ReactDOM.render(
   <Comp />,
   document.querySelector('#app')
)

```


## ���������

* һ���ǳ�ʼ��֮�󲻱��ֵ
* ����紫�� �����Լ������
* ��ͨ���⹹��ֵ����

> getDefaultProps ����Ĭ������ֵ

��û�д������ԣ��ͻ�ʹ��Ĭ�ϵ�����ֵ

> propTypes ����

propTypesָ�������� ����������Ͳ�ͬ���߸����Բ����� �ᱨ��


> this.props.children  ��Ԫ��

```
   return (
      <ul>
        {
           this.props.children.map(function(item,index){
              <li key={index}>  item  </li>
           })
        }
      </ul>
   )
```






















