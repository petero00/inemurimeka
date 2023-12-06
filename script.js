let hiki;
function kazoeru() {
    hiki = document.getElementById('hiki').value;
    document.getElementById('dis1').style.display = 'none';
    document.getElementById('ushi').style.animationIterationCount = hiki;
    document.getElementById('ushi').style.animationPlayState = 'running';
    document.getElementById('count').textContent = 'あと' + hiki + '匹';
    setInterval('count()',5000);
}
function count() {
    if(hiki >= 2){
        hiki = hiki - 1;
        document.getElementById('count').textContent = 'あと' + hiki + '匹';
    }else{
        document.getElementById('count').textContent = '終わりました。🥱';
    }
}
