import entities.Carro;
import entities.Cliente;
import entities.Moto;
import entities.Vendedor;

import java.util.ArrayList;
import java.util.Scanner;

public class Menu {
    private Scanner scanner = new Scanner(System.in);
    private ArrayList<Moto> motos = new ArrayList<>();
    private ArrayList<Carro> carros = new ArrayList<>();
    private ArrayList<Cliente> clientes = new ArrayList<>();
    private ArrayList<Vendedor> vendedores = new ArrayList<>();

    private String mostrarMenu() {
        System.out.println("Opções abaixo pressione 0 para sair");
        System.out.println("1 - Consultar carros\n" +
                "2 - Consultar Motos\n" +
                "3 - Consultar Clientes\n" +
                "4 - Consultar vendedores\n" +
                "5 - Cadastrar carro\n" +
                "6 - Cadastrar moto\n" +
                "7 - Cadastrar cliente\n" +
                "8 - Cadastrar vendedor\n" +
                "9 - Vender carro\n" +
                "10 - Vender moto");
        return scanner.nextLine();
    }

    public void iniciar() {
        String opcao = mostrarMenu();
        while (!opcao.equals("0")) {
            switch (opcao) {
                case "1":
                    System.out.println(carros);
                    opcao = mostrarMenu();
                    break;
                case "2":
                    System.out.println(motos);
                    opcao = mostrarMenu();
                    break;
                case "3":
                    System.out.println(clientes);
                    opcao = mostrarMenu();
                    break;
                case "4":
                    System.out.println(vendedores);
                    opcao = mostrarMenu();
                    break;
                case "5":
                    Carro carro = new Carro();
                    System.out.println("Insira o modelo do carro para cadastro:");
                    String modelo = scanner.nextLine();
                    carro.setModelo(modelo);
                    System.out.println("Insira a Marca para cadastro:");
                    String marca = scanner.nextLine();
                    carro.setMarca(marca);
                    System.out.println("Ano do carro:");
                    Integer ano = scanner.nextInt();
                    scanner.nextLine();
                    carro.setAno(ano);
                    System.out.println("Valor do carro:");
                    double valor = scanner.nextDouble();
                    carro.setValor(valor);
                    scanner.nextLine();
                    carros.add(carro);
                    System.out.println("Informe o indice do vendedor");
                    int vendedorCarro = scanner.nextInt();
                    scanner.nextLine();
                    if (!vendedores.contains(vendedores.get(vendedorCarro))) {
                        System.out.println("Vendedor não existe!");
                        opcao = mostrarMenu();
                        break;
                    }
                    carro.setVendedor(vendedores.get(vendedorCarro));
                    opcao = mostrarMenu();
                    break;
                case "6":
                    Moto moto = new Moto();
                    System.out.println("Insira o modelo do carro para cadastro:");
                    String modeloMoto = scanner.nextLine();
                    moto.setModelo(modeloMoto);
                    System.out.println("Insira a Marca para cadastro:");
                    String marcaMoto = scanner.nextLine();
                    moto.setMarca(marcaMoto);
                    System.out.println("Ano do carro:");
                    Integer anoMoto = scanner.nextInt();
                    scanner.nextLine();
                    moto.setAno(anoMoto);
                    System.out.println("Valor do carro:");
                    double valorMoto = scanner.nextDouble();
                    moto.setValor(valorMoto);
                    scanner.nextLine();
                    motos.add(moto);
                    System.out.println("Informe o indice do vendedor");
                    int vendedorMoto = scanner.nextInt();
                    scanner.nextLine();
                    if (!vendedores.contains(vendedores.get(vendedorMoto))) {
                        System.out.println("Vendedor não existe!");
                        opcao = mostrarMenu();
                        break;
                    }
                    moto.setVendedor(vendedores.get(vendedorMoto));
                    opcao = mostrarMenu();
                    break;
                case "7":
                    Cliente cliente = new Cliente();
                    System.out.println("Insira o nome do cliente para cadastro:");
                    String nome = scanner.nextLine();
                    cliente.setNome(nome);
                    System.out.println("Insira o CPF do cliente:");
                    String cpf = scanner.nextLine();
                    cliente.setCpf(cpf);
                    clientes.add(cliente);
                    opcao = mostrarMenu();
                    break;
                case "8":
                    Vendedor vendedor = new Vendedor();
                    System.out.println("Insira o nome do vendedor para cadastro:");
                    String nomeVendedor = scanner.nextLine();
                    vendedor.setNome(nomeVendedor);
                    System.out.println("Insira o CPF do cliente:");
                    String cpfVendedor = scanner.nextLine();
                    vendedor.setCpf(cpfVendedor);
                    vendedores.add(vendedor);
                    opcao = mostrarMenu();
                    break;
                case "9":
                    System.out.println("Insira o indice do carro a ser vendido:");
                    int indiceCarro = scanner.nextInt();
                    scanner.nextLine();
                    System.out.println("Insira o indice do cliente:");
                    int indiceCliente = scanner.nextInt();
                    scanner.nextLine();
                    carros.get(indiceCarro).setCliente(clientes.get(indiceCliente));
                    opcao = mostrarMenu();
                    break;
                case "10":
                    System.out.println("Insira o indice da moto a ser vendida:");
                    int indiceMoto = scanner.nextInt();
                    scanner.nextLine();
                    System.out.println("Insira o indice do cliente:");
                    int indiceClienteMoto = scanner.nextInt();
                    scanner.nextLine();
                    motos.get(indiceClienteMoto).setCliente(clientes.get(indiceClienteMoto));
                    opcao = mostrarMenu();
                    break;
            }
        }
    }

}
