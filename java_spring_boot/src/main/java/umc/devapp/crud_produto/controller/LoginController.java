package umc.devapp.crud_produto.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class LoginController {
    //endpoint do login
    @PostMapping("/login")
    public ResponseEntity<String> login (@RequestBody LoginRequest loginrequest){
        //verificação em caso de erro
        if(loginrequest == null){
            return ResponseEntity.status(400).body("Requisição inválida");
        }

        String user = loginrequest.getUsername();
        String password = loginrequest.getPassword();

        //teste pra ver o erro do front end
        System.out.println("usuario recebido com sucesso" + user);
        System.out.println("senha recebida" + password);


        if("admin".equals(user) && "123".equals(password)){
            return ResponseEntity.ok("Login bem sucedido");
        } else {
            return ResponseEntity.status(401).body("Usuario ou senha invalidos");
        }
    }

        public static class LoginRequest{
            private String username;
            private String password;
    
            // construtor vazio para o spring instanciar a classe
            public LoginRequest(){

            }

        public String getUsername(){
            return username;
        }

        public String getPassword(){
            return password;
        }

        public void setUsername(String username){
            this.username = username;
        }

        public void setPassword(String password){
            this.password = password;
        }

   }
   
}

