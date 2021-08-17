    //get a list of all mini images
    var guaList = document.getElementById("guaList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<guaList.length;i++){
        guaList[i].onmouseover = function(){
            document.getElementById("gua").src = this.src;
        }
    }
    
    //get a list of all mini images
    var lpList = document.getElementById("lpList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<lpList.length;i++){
        lpList[i].onmouseover = function(){
            document.getElementById("lp").src = this.src;
        }
    }

    //get a list of all mini images
    var piList = document.getElementById("piList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<piList.length;i++){
        piList[i].onmouseover = function(){
            document.getElementById("paii").src = this.src;
        }
    }

    //get a list of all mini images
    var umiList = document.getElementById("umiList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<umiList.length;i++){
        umiList[i].onmouseover = function(){
            document.getElementById("umi").src = this.src;
        }
    }

    //get a list of all mini images
    var spList = document.getElementById("spList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<spList.length;i++){
        spList[i].onmouseover = function(){
            document.getElementById("skullPanda").src = this.src;
        }
    }
        
    //get a list of all mini images
    var dmList = document.getElementById("dmList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<dmList.length;i++){
        dmList[i].onmouseover = function(){
            document.getElementById("dimoo").src = this.src;
        }
    }

    //get a list of all mini images
    var cgList = document.getElementById("cgList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<cgList.length;i++){
        cgList[i].onmouseover = function(){
            document.getElementById("cranGora").src = this.src;
        }
    }
    
    //get a list of all mini images
    var sasaList = document.getElementById("sasaList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<sasaList.length;i++){
        sasaList[i].onmouseover = function(){
            document.getElementById("sasa").src = this.src;
        }
    }

    //get a list of all mini images
    var sankList = document.getElementById("sankList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<sankList.length;i++){
        sankList[i].onmouseover = function(){
            document.getElementById("sank").src = this.src;
        }
    }

    //get a list of all mini images
    var ftList = document.getElementById("ftList").getElementsByTagName("img");
    //traverse these mini images
    //when mouse hovers over a mini image, this mini image will be displayed in the large image area
    for(var i=0; i<ftList.length;i++){
        ftList[i].onmouseover = function(){
            document.getElementById("fairyTale").src = this.src;
        }
    }

    /*Smoothly back to the top of the page*/
    window.addEventListener("scroll",handle)
    function handle(){
        //Get the current scroll bar's ordinate position, and compatible with a variety of browsers
        var triggerDistance = document.body.scrollTop||document.documentElement.scrollTop
        //get the button
        var back = document.getElementById("backToTop")
        //如果当前滚动条位置大于200则显示该按钮，否则该按钮隐藏
        //If the position of current scroll bar is greater than 200, the button will be displayed; 
        //otherwise, the button will be hidden
        if(triggerDistance>=200){
            back.style.display = "block";
        }else{
            back.style.display = "none";
        }
        //When click this button, page will smoothly return to the top
        back.onclick = function(){
            window.scrollTo({
                top:0,behavior:"smooth"
            })
        }
    }