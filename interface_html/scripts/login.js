document.getElementById("login-Form").addEventListener("submit",async function(e){
            e.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:8080/login",{
                method :  "POST",
                headers:{
                    "Content-Type": "application/json"
                }, body: JSON.stringify({username: document.getElementById("username").value,
                password: document.getElementById("password").value
                })
            })
            const msg = document.getElementById("msg")

            if(response.ok){
                const text = await response.text()
                msg.style.color = "green"
                msg.textContent = text
            }else {
                const text = await response.text()
                msg.style.color = "red"
                msg.textContent = text
            }
        });