let　changeCharacter = Math.floor( Math.random()* 2 + 1 );
switch ( changeCharacter ) {
    case 1:
        console.log( 'boy' );
        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy.png');
        break;
    case 2:
        console.log( 'girl' );
        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl.png');
        break;
    }



document.addEventListener('DOMContentLoaded', ()=> {
    let result = 0; //勝ち変数

    let btn_area = document.querySelectorAll('.btn-area');
    btn_area.forEach( index => {
        index.addEventListener('click', ()=> {

            if ( index.dataset.indexId == 1 ) {
                // console.log( 'goo' );
                countDown();
                //纏めてcssの追加をしたいので後日整理
                index.classList.toggle('hide-area');
                document.getElementById('tyoki').classList.add('hide-area');
                document.getElementById('par').classList.add('hide-area');

                setTimeout( showCommand, 5000 );

            } else if ( index.dataset.indexId == 2) {
                // console.log( 'tyoki');
                countDown();
                index.classList.toggle('hide-area');
                document.getElementById('goo').classList.add('hide-area');
                document.getElementById('par').classList.add('hide-area');

                setTimeout( showCommand, 5000 );
            } else {
                console.log( 'par');
                countDown();
                index.classList.toggle('hide-area');
                document.getElementById('goo').classList.add('hide-area');
                document.getElementById('tyoki').classList.add('hide-area');

                setTimeout( showCommand, 5000 );
            }

        },false);
        });

        cpuAction();
        function cpuAction() {
            let random = Math.floor(Math.random()*3 + 1 );
            // console.log( random );
            switch　( random ) {
                case 1:
                    // console.log( 'goo' );
                    break;
                case 2:
                    // console.log( 'tyoki' );
                    break;
                case 3:
                    // console.log( 'par' );
                    break;
                }

            }
            //カウントダウンの秒数
            let sec = 4;
            function countDown() {
                //無名関数にする事でグローバル変数secを参照する
                let id = setInterval(function() {
                    sec--;
                    console.log( sec );
                    document.querySelector('.modal').style.display = 'block';
                    document.querySelector('.modal-count-tx').textContent = sec;
                    if ( sec === 0 ) {
                        console.log( 'finish ');
                        document.querySelector('.modal').style.display = 'none';

                        clearTimeout( id );
                        sec = 4;
                    }
                },1000);
            }


            showCommand =()=> {
                document.getElementById('goo').classList.remove('hide-area');
                document.getElementById('tyoki').classList.remove('hide-area');
                document.getElementById('par').classList.remove('hide-area');
            }
});
