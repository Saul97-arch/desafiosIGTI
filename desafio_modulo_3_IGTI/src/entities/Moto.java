package entities;

public class Moto extends Veiculos {
    @Override
    public String toString() {
        return marca + " " + ano + " " + modelo + "Cliente: " + cliente;
    }
}
