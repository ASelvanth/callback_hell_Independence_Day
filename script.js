
let container = document.createElement("div");
container.classList.add("body_container");

let para = document.getElementById("p");
para.innerHTML = 10;
document.body.append(container);
let count = 10;
setTimeout(()=>{
    count = count-1;
    para.innerHTML = count;
    setTimeout(()=>{
        count = count-1;
        para.innerHTML = count;
        setTimeout(()=>{
            count = count-1
            para.innerHTML = count;
            setTimeout(()=>{
                count = count-1;
                para.innerHTML = count;
                setTimeout(()=>{
                    count = count-1;
                    para.innerHTML = count;
                    setTimeout(()=>{
                        count = count-1;
                        para.innerHTML = count;
                        setTimeout(()=>{
                            count = count-1;
                            p.innerHTML = count;
                            setTimeout(()=>{
                                count = count-1;
                                para.innerHTML = count;
                                setTimeout(()=>{
                                    count = count-1;
                                    para.innerHTML = count;
                                    setTimeout(()=>{
                                        count = count-1;
                                        para.innerHTML = "Happy Independence Day";
                                        
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)