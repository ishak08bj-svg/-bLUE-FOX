const dict = {
  "hi":"مرحبا",
  "hello":"مرحبا",
  "brother":"أخي",
  "good":"جيد",
  "morning":"صباح"
};

function translate(){
  const text = input.value.toLowerCase().trim();
  if(dict[text]){
    output.value = dict[text];
  }else{
    output.value = "❌ غير موجود في القاموس";
    suggest(text);
  }
}

function suggest(word){
  suggestions.innerHTML="";
  Object.keys(dict).forEach(k=>{
    if(k.startsWith(word[0])){
      const d=document.createElement("div");
      d.innerText=k;
      d.onclick=()=>{input.value=k;translate();};
      suggestions.appendChild(d);
    }
  });
}
