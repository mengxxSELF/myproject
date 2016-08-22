# session

�����ݴ洢�ڷ������ˡ���cookie��ͬ����cookieҪ��ȫ

## session �洢�Ļ���ԭ��

> �ڷ�������ʹ��Ψһ��ʶ�洢���ݣ�һ����ʶ��Ӧһ��ֵ�����˱�ʶֵ���͸��ͻ���
���ͻ���Я���˱�ʶֵ�����ʷ�������ʱ�򣬾ͷ��ظ��ͻ��˸ñ�ʶ��Ӧ������ֵ


```
var express = require('express');
var cookieParser = require('cookie-parser');
var uuid = require('uuid'); // �������ɲ�ͬ��cookieID ֵ ��Ϊ�������д洢��Ψһ��ʶ��
var app =express();


var sessions ={};
var SESSION_KEY='session_id';
app.get('/',function(req,res){
  var getCookieId = req.cookies[SESSION_KEY]; // �жϿͻ����Ƿ��б�ʶ
  if(getCookieId){
      var getCookieCont = sessions[getCookieId]; // ͨ�����Ψһ��ʶֵ ��sessions �в��Ҷ�Ӧ������
      if(getCookieCont){
         getCookieCont.moneyTotal -= 10; // �����ֵ ��ֵ��ȥ10Ԫ
      }
      res.send('���ж�Ǯ'+ getCookieCont.moneyTotal )
  }else{
      // �����������ͷ��   û��SESSION_KE  �ʹ�������ֵ
      var sessionId = uuid.v4(); // ����Ψһ��ʶ
      sessions[sessionId]=  { moneyTotal : 100   }  ; //��sessions �б�����ֵ
      res.cookie(SESSION_KEY,sessionId); // ����ʶ�� д��cookie
      res.send('���ж�Ǯ'+ sessions[sessionId].moneyTotal)
  }



})

app.listen(5005);


```