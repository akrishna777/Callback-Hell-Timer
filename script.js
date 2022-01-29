
let time = document.getElementById('timer')
time.innerHTML = `10`
function printData(callback) {

    setTimeout(() => {
        time.innerHTML = '09';


        setTimeout(() => {
            time.innerHTML = '08'


            setTimeout(() => {
                time.innerHTML = '07'


                setTimeout(() => {
                    time.innerHTML = '06'


                    setTimeout(() => {
                        time.innerHTML = '05'


                        setTimeout(() => {
                            time.innerHTML = '04'


                            setTimeout(() => {
                                time.innerHTML = '03'


                                setTimeout(() => {
                                    time.innerHTML = '02'


                                    setTimeout(() => {
                                        time.innerHTML = '01'

                                        setTimeout(() => {
                                            time.innerHTML = '00'

                                            setTimeout(() => {
                                                document.body.innerHTML = `
                                                <div class="contain">
                                                    <div id="d" class="division" style="background-color:rgb(252,116,4)"></div>

                                                    <div id="d1" class="division" style="background-color:rgb(255,255,255)">
                                                        <img id="chakra"
                                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ashoka_Chakra.svg/1024px-Ashoka_Chakra.svg.png"
                                                            width="50px" height="50px" align="middle">
                                                    </div>

                                                    <div id="d2" class="division" style="background-color:rgb(20,140,12)"></div>
                                                    <div id="text">Happy Independence Day!</div>

                                                </div>

                                                `

                                            }, 100);

                                        }, 1000);

                                    }, 1000);

                                }, 1000);

                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
}

printData()