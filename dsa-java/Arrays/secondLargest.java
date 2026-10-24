
public class secondLargest {
    public static void main(String[] args) {
        int[] arr={2,3,6,7,8};
        int n=arr.length-1;
        int largest=Integer.MIN_VALUE;
        int secondLargest=Integer.MIN_VALUE;
        for(int i=0;i<=n;i++){
            if(arr[i]>largest){
                secondLargest=largest;
                largest=arr[i];
            }else if(arr[i]<largest && arr[i]>secondLargest){
                secondLargest=arr[i];
            }
        }
       if(secondLargest==Integer.MIN_VALUE){
        System.out.println("not exist");
       }else{
        System.out.print("secondlargest number: "+secondLargest);
       }

    }
    
}
