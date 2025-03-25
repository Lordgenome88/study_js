//カラーコードの文字
const text = document.querySelector('#colorText');
//実際に表示されている色
const color = document.querySelector('#colorPicker');

//カラー変更。カラーパレットにて実際にカラーを選択したときに発動
const colorBg = () => {
  //選択した色を背景色に変更
  document.body.style.backgroundColor = color.value;
  console.log('a')

  //カラーコードを表示
  if(color.value === '#ffffff'){
    text.textContent = `カラーコード： ${color.value} (white)`;
  }else if(color.value === '#000000'){
    text.textContent = `カラーコード： ${color.value} (black)`;
  }else{
    text.textContent = `カラーコード：${color.value}`;
  }
};

//無名関数版　イベントリスナーの第二引数に関数名ではなく直接関数の中身を記述する方法
// color.addEventListener('input', () => {
//   text.textContent = `カラーコード：${color.value}`;
// })

color.addEventListener('input',colorBg);