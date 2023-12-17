document.addEventListener("DOMContentLoaded",function(){
  document.querySelector("#search").onclick=function(){
  const word=document.querySelector("#text").value;
  if(document.querySelector("#text").value==""){
    document.querySelector("#word").innerHTML="Welcome";
    document.querySelector("#meaning").style.color="red";
    document.querySelector("#sound").innerHTML="";
    document.querySelector("#meaning").innerHTML="Please enter a word";
  }else{
    document.querySelector("#meaning").style.color="black";
    document.querySelector("#word").innerHTML=document.querySelector("#text").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data=>{
      console.log(data);
      const meaning=data[0].meanings[0].definitions[0].definition;
      const sound=data[0].phonetic;
      document.querySelector("#sound").innerHTML=sound;
      document.querySelector("#meaning").innerHTML=meaning;

    })
    .catch(()=>{
      document.querySelector("#meaning").innerHTML="Unknown word";
      document.querySelector("#meaning").style.color="red";
    })
  }
  document.querySelector("#text").value="";
  };

});