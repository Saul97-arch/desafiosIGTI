package pacote02;

import java.util.Scanner;

public class classe02 {
    public static void main(String[] args) {
        int valor1 = 0, valor2 = 50, valor3 = 0;
        Scanner ent = new Scanner(System.in);

        System.out.println("Digite o primeiro valor para a variável valor 1: ");
        valor1 = ent.nextInt();
        valor2 += valor1;

        if(valor1 % 2 == 0)
            valor3 = valor1 * 4;
        else  if (valor1 % 3 == 0)
            valor3 = valor2 * 3;
        else
            valor3 = valor2;

        System.out.printf("O valor da variável valor3 é: %d.", valor3);
    }
}
