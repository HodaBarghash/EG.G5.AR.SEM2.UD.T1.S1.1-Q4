function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60domuUZfZm":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzxnwOusbpzyc90RsV_qrgnyxkrMQbcijYadCb1jLaz2j3sYA_7oRsN775mRqP_OG3k4Q/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

