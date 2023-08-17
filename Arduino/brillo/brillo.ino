int brillo=0;
void setup(){
  
  pinMode(3,OUTPUT);
  }

void loop(){ 
  
  for(brillo=0; brillo<=255; brillo+=5){
  analogWrite(3,brillo);
  delay(30);
  }
  for(brillo=255; brillo>=0; brillo-=5){
    analogWrite(3,brillo);
    delay(30);
    }
  }
