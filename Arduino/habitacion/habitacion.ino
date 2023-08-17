int microfono = 0;
void setup() {
Serial.begin(9600);
}
void loop() {
microfono = analogRead(A2);
Serial.println(microfono);
delay(500);
}

if(microfono>300){
  //prender el los ledes
  //digitalWrite(led1,HIGH)
  //digitalWrite(led1,HIGH)
  //digitalWrite(led1,HIGH)
  }
