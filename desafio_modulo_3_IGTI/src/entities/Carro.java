package entities;

public class Carro extends Veiculos {
    @Override
    public String toString() {
        return marca + " " + ano + " " + modelo + " Cliente: " + cliente;
    }
}
