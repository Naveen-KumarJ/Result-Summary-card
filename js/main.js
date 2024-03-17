document.addEventListener("DOMContentLoaded", ()=>{
    fetch('./data.json')
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json);
            // document.querySelector(".sub--1 .title-part .subject-title").innerHTML=json[0].category;
            // let totalScore=0;
            for (let index = 0; index < json.length; index++) {
                document.querySelector(".sub--"+(index+1)+ " .title-part img").src=json[index].icon;
                document.querySelector(".sub--"+(index+1)+ " .title-part .subject-title").innerHTML=json[index].category;
                let score=document.querySelector(".sub--"+(index+1)+ " .score-part p span").innerHTML=json[index].score;
                // totalScore = totalScore+score;
            }

            // document.querySelector(".cricle-score-part h1").innerHTML=totalScore;
        })
})