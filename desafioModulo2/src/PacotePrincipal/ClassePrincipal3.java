package PacotePrincipal;

import java.util.Scanner;

public class ClassePrincipal3 {
    public static void main(String[] args) {
        int n1 = 0;
        boolean resultado;
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número inteiro:");
        n1 = entrada.nextInt();

        resultado = (n1 % 2 == 0);

        System.out.printf("O número digitado foi: %d. O resultado da operação booleana: %b.", n1, resultado);
    }
}
