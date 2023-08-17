#include<stdlib.h>
#include<stdio.h>

int main()
{
	FILE *f=fopen("pasatiempos.txt","r");// abrir el archivo
	char nombre[100]={0};
	char edad[10]={0};
	char pasatiempo[50]={0};
	int promedioEdad=0;
	int contador=0;
	int edadEntero=0;
	char cmd[100]={0};


	while(1)//1 es igual a verdadero, entonces crea un bucle infinito
	{		
		fscanf(f,"%s %s %s",nombre,edad,pasatiempo);//se adquiere caracteres desde el archivo al cual apunta f,y se guardan en el arreglo s
		printf("%s  %s  %s\n",nombre,edad,pasatiempo);
		
        edadEntero=atoi(edad);//arreglo a entero //array to int
		promedioEdad+=edadEntero;
		contador++;
		sprintf(cmd,"start https://www.google.com/search?q=%s^&tbm=isch",pasatiempo);
		system(cmd);

		if(feof(f))//FileEndOfFile retorna verdadero si el cursor  llegó al final del archivo
		{
			break;//break rompe el bucle que lo contiene(while(1))
		}
	}
	promedioEdad/=(contador -1);
	printf("El promedio de edad del grupo 3 es: %d \n",promedioEdad);
	fclose(f); //siempre se cierra el archivo 
	return 0;
}
