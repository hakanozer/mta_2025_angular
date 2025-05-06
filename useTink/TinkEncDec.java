package useTink;

import com.google.crypto.tink.subtle.AesGcmJce;
import com.google.crypto.tink.subtle.Base64;

public class TinkEncDec {

    private static String key128Bit = "NcRfUjXn2r5u7x!A";
    private static String extraKey = "key123";


    public static String encrypt(String plainText) {
        String cipherText = "";
        try {
            AesGcmJce aesGcmJce = new AesGcmJce(key128Bit.getBytes());
            byte[] bytes = aesGcmJce.encrypt(plainText.getBytes(), extraKey.getBytes());
            cipherText = new String(bytes, "iso-8859-1");
        }catch (Exception ex) {
            System.err.println("encrypt error: " + ex.getMessage());
        }
        cipherText = Base64.encode(cipherText.getBytes());
        return cipherText;
    }

    public static String decrypt(String cipherText) {
        String plainText = "";
        try {
            cipherText = new String( Base64.decode(cipherText) );
            byte[] convertBytes = cipherText.getBytes("iso-8859-1");
            AesGcmJce aesGcmJce = new AesGcmJce(key128Bit.getBytes());
            byte[] bytes = aesGcmJce.decrypt(convertBytes, extraKey.getBytes());
            plainText = new String(bytes);
        }catch (Exception ex) {
            System.err.println("decrypt error: " + ex.getMessage());
        }
        return plainText;
    }

}
