// DECLARE VARIABLES -----------------------------------------------
// /////////////////////////////////////////////////////////////////


    // GET ELEMENTS ON DOM xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // /////////////////////////////////////////////////////////////

        var getBodyControl = document.querySelector(".bodyControl")

        var getImagePlacement = document.querySelector(".introSectionImageActual");
        var getHeadlineTextOne = document.querySelector(".introSectionHeadlineActualOne");
        var getHeadlineTextTwo = document.querySelector(".introSectionHeadlineActualTwo");
        var getHeadlineTextThree = document.querySelector(".introSectionHeadlineActualThree");
        var getHeadlineTextFour = document.querySelector(".introSectionHeadlineActualFour");

    // ARRAYS BUILDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // /////////////////////////////////////////////////////////////

        var ImageBlockArray = [

            "https://freakydeakygifs.com/content/2018/11/kendra-lust_004.gif",
            "https://i0.wp.com/listslut.com/wp-content/uploads/2015/04/Kendra-Lust-porn-gifs-08.gif?ssl=1",
            "https://i.redd.it/kkexvhb8zwec1.gif",
            "https://i0.wp.com/171gifs.com/wp-content/uploads/2015/05/Interracial-gif-Kendra-Lust-fucked-by-a-Big-Black-Cock-02-interracialporn.gif?resize=500%2C311&ssl=1",
            "https://analporngifs.com/content/2021/06/anal_001-44.gif",

            "https://xgifer.com/content/2022/01/kendra-lust-rub-a-tug-tug_001.gif",
            "https://porngifer.com/content/2018/12/3-12-kendra-lust-brazzers-mommygotboobs-rub-a-tug-tug_003.gif",
            "https://lh3.googleusercontent.com/proxy/Z_aYyBclba5rw0oqIA9ip7BJJREIzZiUd7px4r98mvjOGPebtDsfxhpleh8KjCP-4GbVDMMlIQNIPQURFRbK-P_6ii4",
            "https://el.phncdn.com/gif/34842252.gif",
            "https://porngif.co/wp-content/uploads/2023/07/140775-omg-this-is-fine.gif",

            "https://analporngifs.com/content/2021/10/delicious_001.gif",
            "https://myteenwebcam.com/fapp/gifs/f60c60d406303085d8f773885f21eac0.gif",
            "https://myteenwebcam.com/fapp/gifs/29ed5f38552c294d8b23227f96b7fcf0.gif",
            "https://porngifmag.com/content/2018/12/peta-jensen-my-girlfriends-busty-friend-gifset_005.gif",
            "https://el.phncdn.com/gif/3974761.gif",

            "https://xgifer.com/content/2021/11/link-in-bio-peta-jensen_001.gif",
            "https://namethatpornstar.com/images/cache/NTPS3of9ebvcab68.gif",
            "https://el.phncdn.com/pics/gifs/036/068/281/(m=ldpwiqacxtE_Ai)(mh=vOwO-hcnr1jmR90Y)36068281b.gif",
            "https://analporngifs.com/content/2022/02/madison-ivy-analporngif_001.gif",
            "https://gifcandy.net/wp-content/uploads/2016/03/lovely-couple-having-sex.gif",

        ];









    // PAGE APOLOGIES LINES BUILDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // /////////////////////////////////////////////////////////////

        var pageResetResponsesTextLineOne = [];
        var pageResetResponsesTextLineTwo = [];
        var pageResetResponsesTextLineThree = [];
        var pageResetResponsesTextLineFour = [];

    // SENTENCE ONE BUILD BUILDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // /////////////////////////////////////////////////////////////

        var sentenceOneArray = [

            "Oh honey bunny,",
            "Oh, cherry landing strip",
            "I'm serious, Lunar mooner",
            "come on now,",
            "still trying?",
            "you are fun...",
            
            "one more time",
            "cute",
            "again?",
            "seriously tho?",
            "okay...",

            "still at it?",
            "here's an idea,",
            "4 more, come on",
            "3 more...",
            "2...",

            "you guessed it,",
            "Oh butter buns,",
            "still trying?",
            "yup,",
            "no i meant",

            "I'm done,",
            "no i'm serious,",
            "don't believe me?",
            "okay then",
            "switching to,",


        ];





    // SENTENCE TWO BUILD BUILDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // /////////////////////////////////////////////////////////////

        var sentenceTwoArray = [

            "you really",
            "Don't try",
            "Just leave &",
            "You really",
            "Like why tho?",
            "I'll give you",
            
            "This is really",
            "You actually fell",
            "Really? You really",
            "We are not",
            "I guess you",

            "Maybe, stretch",
            "What if you",
            "I promise, just",
            "Almost there,",
            "And suddenly,",

            "1 more try but,",
            "For some reason",
            "You are beyond",
            "Almost,",
            "I'm almost done",

            "That's all they",
            "Im turning off",
            "That's fine,",
            "Sure you don't",
            "Shutdown",


        ];





    // SENTENCE THREE BUILD BUILDS xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    // /////////////////////////////////////////////////////////////

        var sentenceThreeArray = [

            "shouldn't",
            "that again.",
            "i wont tell.",
            "tried again?",
            "okay then.",
            "two more tries.",
            
            "going to work.",
            "for it.",
            "just tried again?",
            "hiding anything.",
            "didn't believe me.",

            "your fingers a bit.",
            "just clicked exit?",
            "4 more clicks.",
            "almost there.",
            "you aren't excited?",

            "you were warned.",
            "you actually believed.",
            "reasoning with.",
            "donezo...",
            "playing for today.",

            "paid me, to handle.",
            "the lights now.",
            "keep trying again.",
            "need a ride?",
            "mode.",


        ];




                

                    function runCheckOnlyOnButtonClicks () {


                        // NUMBER FOR TITLES -----------------------
                        // /////////////////////////////////////////
            
                            var getNumberForHeadlines = 1;

                            var getPreviousNumber = window.sessionStorage.getItem("headlineCounter");

                        // CHECK IF NUMBER IS UNDEFINED OR NOT -----
                        // /////////////////////////////////////////
    
                            if ( 
                                
                                    (getPreviousNumber == undefined) || (getPreviousNumber == null)
                                    
                                ) {
    
                                    alert("CANT SEE IT...");
    
    
                                    // SET ITEM OF SCREEN FROM SESSION 
                                    // /////////////////////
                
                                        window.sessionStorage.setItem("headlineCounter", getNumberForHeadlines);
    
                                } else {
    
                                    // CHANGE OLD NUMBER TO NEW NUMBER 
                                    // /////////////////////////////
    
                                        getNumberForHeadlines = (Number(getPreviousNumber) + 1)
    
    
                                            // SET ITEM OF SCREEN FROM SESSION 
                                            // /////////////////////
                        
                                                window.sessionStorage.setItem("headlineCounter", getNumberForHeadlines);
    
    
                                }


                    }
































// LETS DISSAPEAR HUH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////


    getBodyControl.setAttribute("oncontextmenu", ("return" + " " + false));


    document.onkeydown = function (e) {

        // disable F12 key
        if(e.keyCode == 123) {

            runCheckOnlyOnButtonClicks();
            location.reload();
            return false;

        }

        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){

            runCheckOnlyOnButtonClicks();
            location.reload();
            return false;
            
        }

        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {

            runCheckOnlyOnButtonClicks();
            location.reload();
            return false;
            
        }

        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
        
            runCheckOnlyOnButtonClicks();
            location.reload();
            return false;

        }
    }


    document.addEventListener('contextmenu', event => event.preventDefault());


    !function() {
        function detectDevTool(allow) {
          if(isNaN(+allow)) allow = 100;
          var start = +new Date(); // Validation of built-in Object tamper prevention.
          debugger;
          var end = +new Date(); // Validates too.
          if(isNaN(start) || isNaN(end) || end - start > allow) {
            // input your code here when devtools detected.

        
            runCheckOnlyOnButtonClicks();
            location.reload();


          }
        }
        if(window.attachEvent) {
          if (document.readyState === "complete" || document.readyState === "interactive") {
              detectDevTool();
            window.attachEvent('onresize', detectDevTool);
            window.attachEvent('onmousemove', detectDevTool);
            window.attachEvent('onfocus', detectDevTool);
            window.attachEvent('onblur', detectDevTool);
          } else {
              setTimeout(argument.callee, 0);
          }
        } else {
          window.addEventListener('load', detectDevTool);
          window.addEventListener('resize', detectDevTool);
          window.addEventListener('mousemove', detectDevTool);
          window.addEventListener('focus', detectDevTool);
          window.addEventListener('blur', detectDevTool);
        }
      }();



// LETS DISSAPEAR HUH xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////// 






































// FUNCTIONS -------------------------------------------------------
// /////////////////////////////////////////////////////////////////

        // FOR RANDOM COVER IMAGE xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // /////////////////////////////////////////////////////////

            function getRandomImage() {

                var getRandomNumber = ImageBlockArray[Math.floor(Math.random() * ImageBlockArray.length)];

                getImagePlacement.style =`
                
                    width:180px;
                    height:180px;
                    border-radius:5px;
                    background:url("${getRandomNumber}");
                    background-size:cover;
                    background-position:center;
                    background-repeat:no-repeat;
                    box-shadow:0px 20px 20px -20px rgba(0,0,0,0.2);
                    transition:all 600ms ease;
                    -webkit-transition:all 600ms ease;
                    -moz-transition:all 600ms ease;
                    -o-transition:all 600ms ease;
                    -ms-transition:all 600ms ease;
                
                `

            }

                // FIRE OFF RANDOM SELECT ==========================
                // /////////////////////////////////////////////////

                    getRandomImage(); 






































// PAGE SETTERS ----------------------------------------------------
// /////////////////////////////////////////////////////////////////

    function updateHeadlines () {

        var getPreviousNumber = window.sessionStorage.getItem("headlineCounter");

        // IF NOT FOUND

        // CHECK IF KEY EXISTS AND IF IT DOES, CHANGE HEADLINES ===
        // ////////////////////////////////////////////////////////

            if ( (getPreviousNumber == undefined) || (getPreviousNumber == null) ) {

            } else {

                // UPDATE HEADLINES xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                ///////////////////////////////////////////////////

                    // CHECK IF COUNTER NUMBER IS AT END xxxxxxxxxx
                    // ////////////////////////////////////////////

                        if ( 
                            
                                (getPreviousNumber == "1") ||
                                (Number(getPreviousNumber) == 1) ||
                                (Number(getPreviousNumber) > 0)
                                
                            ) {

                            getHeadlineTextOne.textContent = sentenceOneArray[Number(getPreviousNumber)];
                            getHeadlineTextTwo.textContent = sentenceTwoArray[Number(getPreviousNumber)];
                            getHeadlineTextThree.textContent = sentenceThreeArray[Number(getPreviousNumber)];
                            getHeadlineTextFour.textContent = "";


                                if ( 

                                    (getPreviousNumber == "24") ||
                                    (Number(getPreviousNumber) == 24) ||
                                    (Number(getPreviousNumber) > 23)


                                 ) {


                                    // TURN OFF LIGHTS xxxxxxxxxxxx
                                    // ////////////////////////////

                                        getBodyControl.style = `
                                        
                                            width:100%;
                                            font-size:0px;
                                            margin:0px auto;
                                            text-align:center;
                                            background:#2C2C2C;
                                            color:rgba(0,0,0,0);
                                            font-family: "Manrope", sans-serif;
                                            transition:all 600ms ease;
                                            -webkit-transition:all 600ms ease;
                                            -moz-transition:all 600ms ease;
                                            -o-transition:all 600ms ease;
                                            -ms-transition:all 600ms ease;

                                        
                                        `



                                        

                                    getHeadlineTextOne.textContent = "";
                                    getHeadlineTextTwo.textContent = "";
                                    getHeadlineTextThree.textContent = "";
                                    getHeadlineTextFour.textContent = "";


                                }

                        } else {


                        }
                
            }

    }


        // EXECUTE HEADLINES FILLER xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ///////////////////////////////////////////////////////

            updateHeadlines();