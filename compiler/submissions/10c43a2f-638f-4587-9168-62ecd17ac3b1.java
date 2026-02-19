import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        if (scanner.hasNext()) {
            System.out.print("Uploaded " + scanner.next());
        }
    }
}