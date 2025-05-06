package useTink;

public class MainTink {
    public static void main(String[] args) {

        TinkEncDec tinkEncDec = new TinkEncDec();
        String cipherText = tinkEncDec.encrypt("12345");
        System.out.println(cipherText);

        String plainText = tinkEncDec.decrypt(cipherText);
        System.out.println(plainText);

    }
}
