package pacote04;

import java.util.Scanner;

public class aulaAoVivo {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int ano, idade;

        System.out.println("Digite ano em que você nasceu");
        ano = entrada.nextInt();

        idade = 2020 - ano;
        System.out.printf("Sua idade é %d, e o seu ano de nascimento é %d\n", idade, ano);
        if (idade > 0 && idade <= 12) {
            System.out.println("Criança!");
        } else if (idade <= 21) {
            System.out.println("Adolescente!");
        } else if (idade < 30) {
            System.out.println("Ficando velho hein brow");
        } else if (idade > 30 && idade < 50){
            System.out.println("Está velho meu jovennn\n");
        } else {
            System.out.println("Nem nasceste!");
        }
    }
}
