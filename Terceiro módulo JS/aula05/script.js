    function recursiva(max){
        if (max >= 1500) return;
        max++;
        console.log(max);
        recursiva(max);
    }

recursiva(0);