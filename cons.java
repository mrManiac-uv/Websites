class cons {
    int a;
    float b;
    char ch;

    cons() {
        ch = 'D';
        b = 90;
    }

    public void accept() {
        a = 75;
    }

    public void show() {
        System.out.println(b);
        System.out.println(a);
        System.out.println(ch);
    }

    public static void main(String[] args) {
        cons obj = new cons();
        System.out.println("Output 1");
        obj.show();
        obj.accept();
        System.out.println("Output 2");
        obj.show();
    }
}