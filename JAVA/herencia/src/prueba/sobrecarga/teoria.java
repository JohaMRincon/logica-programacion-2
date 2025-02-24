package sobrecarga;

//overload hace referencia a la sobrecarha del metodo
public class teoria {

    public int sumar(int a, int b) {
        return a+b;

    }

    public int sumar(int a, int b, int c) {
        return a+b+c;

    }

    public static void teoria(String[] arg){

        teoria operacion=new teoria();
        System.out.println("suma con dos parametros");
    }
}