let result = 0; //勝ち変数


let　changeCharacter = Math.floor( Math.random()* 2 + 1 );
switch ( changeCharacter ) {
    case 1:

        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy.png');
        break;
    case 2:
        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl.png');
        break;
    }



document.addEventListener('DOMContentLoaded', ()=> {

    let btn_area = document.querySelectorAll('.btn-area');
    btn_area.forEach( index => {
        index.addEventListener('click', ()=> {
            let you_hand;

            if ( index.dataset.indexId == 1 ) {
                countDown();
                you_hand = index.dataset.indexId;
                jankenBattle( you_hand );
                you_hand_action( you_hand );
                //纏めてcssの追加をしたいので後日整理
                index.classList.toggle('hide-area');
                document.getElementById('tyoki').classList.add('hide-area');
                document.getElementById('par').classList.add('hide-area');

                setTimeout( showCommand, 5000 );

            } else if ( index.dataset.indexId == 2) {
                countDown();
                you_hand = index.dataset.indexId;
                jankenBattle( you_hand );
                you_hand_action( you_hand );
                index.classList.toggle('hide-area');
                document.getElementById('goo').classList.add('hide-area');
                document.getElementById('par').classList.add('hide-area');

                setTimeout( showCommand, 5000 );
            } else {
                countDown();
                you_hand= index.dataset.indexId;
                jankenBattle( you_hand );
                you_hand_action( you_hand );
                index.classList.toggle('hide-area');
                document.getElementById('goo').classList.add('hide-area');
                document.getElementById('tyoki').classList.add('hide-area');

                setTimeout( showCommand, 5000 );
            }

        },false);
        });

            //カウントダウンの秒数
            let sec = 4;
            function countDown() {
                //無名関数にする事でグローバル変数secを参照する
                let id = setInterval(function() {
                    sec--;
                    console.log( sec );

                    if ( sec === 0 ) {
                        console.log( 'finish ');
                        document.querySelector('.janken').style.display = 'none';
                        document.querySelector('.user-image').style.display = 'none';
                        if ( changeCharacter == 1 ) {
                            console.log( '男の子' );
                            document.getElementById('cpu_image_icon').setAttribute('src', './images/boy.png');
                        } else {
                            console.log( '女の子' );
                            document.getElementById('cpu_image_icon').setAttribute('src', './images/girl.png');
                        }
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
            //敵のじゃんけん機能（引数にユーザーが選んだ手をいれる）
            function jankenBattle( you_hand ) {
                // 1　グー　2　チョキ 3　パー
                // console.log( you_hand + 'が押されました');
                let cpu_janken_random = Math.floor(Math.random()* 3 + 1 );

                // ユーザーがグーを出した時
                if ( you_hand == 1  &&  cpu_janken_random  == 2 ) {
                    console.log( '勝ち' );
                    console.log( changeCharacter );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy-angry.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl-angry.png');
                    }
                } else if ( you_hand == 1 && cpu_janken_random == 1) {
                    console.log ( 'あいこ' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl.png');
                    }
                } else {
                    console.log( '負け' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy-good.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl-un.png');
                    }
                }
                // ユーザーが猪木を出した時
                if ( you_hand == 2  &&  cpu_janken_random  == 3 ) {
                    console.log( '勝ち' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy-angry.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl-angry.png');
                    }
                } else if ( you_hand == 2 && cpu_janken_random == 2) {
                    console.log ( 'あいこ' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl.png');
                    }
                } else {
                    console.log( '負け' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy-good.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl-un.png');
                    }
                }
                // ユーザーがパーを出したとき
                if ( you_hand == 3  &&  cpu_janken_random  == 1 ) {
                    console.log( '勝ち' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy-angry.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl-angry.png');
                    }
                } else if ( you_hand == 3 && cpu_janken_random == 3) {
                    console.log ( 'あいこ' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl.png');
                    }
                } else {
                    console.log( '負け' );
                    if ( changeCharacter == 1 ) {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/boy-good.png');
                    } else {
                        document.getElementById('cpu_image_icon').setAttribute('src', './images/girl-un.png');
                    }
                }

                function cpu_action() {

                    switch ( cpu_janken_random ){
                        case 1:
                            document.getElementById('cpu_janken_hand').setAttribute('src', './images/goo.png' );
                            document.querySelector('.janken').style.display = 'block';
                            console.log( 'コンピューターはパーを出しました' );
                            break;
                        case 2:
                            document.getElementById('cpu_janken_hand').setAttribute('src', './images/tyoki.png' );
                            document.querySelector('.janken').style.display = 'block';
                            console.log( 'コンピューターはチョキを出しました' );
                            break;

                        case 3:
                            document.getElementById('cpu_janken_hand').setAttribute('src', './images/par.png' );
                            document.querySelector('.janken').style.display = 'block';
                            console.log( 'コンピューターはパーを出しました');
                            break;
                    }

                }
                cpu_action();
            }
            function you_hand_action( you_hand ) {
                // console.log( you_hand );
                if ( you_hand == 1 ) {
                    document.getElementById('user_hand').setAttribute('src' , './images/goo.png');
                    document.querySelector('.user-image').style.display = 'block';
                    console.log(you_hand);
                } else if ( you_hand == 2 ) {
                        document.getElementById('user_hand').setAttribute('src' , './images/tyoki.png');
                        document.querySelector('.user-image').style.display = 'block';
                } else {
                    document.getElementById('user_hand').setAttribute('src' , './images/par.png');
                    document.querySelector('.user-image').style.display = 'block';
                }

            }

});
