package pacote01;

import java.util.Scanner;

public class classe01 {
    public static void main(String[] args) {
        int n1 = 8, n2 = 5;
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número inteiro..:");
        n1 += entrada.nextInt();
        n2 = n2 + n1;
        System.out.printf("Valor de n1 %d.\n Valor de n2 %d.", n1, n2);
    }
}
