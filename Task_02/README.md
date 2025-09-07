# Task 02
This is my submission for Task 02.

1)Codeforces contest
#include <stdio.h>

int main() 
{
    int T,X;
    scanf("%d",&T);
    if(T<=100&&T>=1){
        while (T--){
        scanf("%d",&X);
        if(X<=10)
            printf("YES\n");
        else
            printf("NO\n");
        }
    }

      
    return 0;
}

2)Insurance
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
    int T,X,Y;
    scanf("%d",&T);
    while(T--)
    {
    scanf("%d%d",&X ,&Y);
        if (X>=Y)
        printf("%d\n",Y);
    else
        printf("%d\n",X);
    }
    

    return 0;
}
3)Mine Gold
#include <stdio.h>
int main() {
    int T,N,X,Y;
    scanf("%d",&T);
        if(T<=1000&&T>=1){
            while(T--){
            scanf("%d%d%d",&N,&X,&Y);
                if((N+1)*Y>=X)
                printf("YES\n");
                else
                printf("NO\n");
            }
                
        }
    return 0;
}
4)Big Hotel

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int T,X,Y;
    scanf("%d",&T);
    while(T--){
        scanf("%d%d",&X,&Y);
        X=(X-1)/10+1;
        Y=(Y-1)/10+1;
        printf("%d\n",abs(X-Y));
    }
    return 0;
}
5)Escape False Alarm
#include <stdio.h>
int main() {
    int t;
    scanf("%d", &t);
    while (t--) {
        int n, x;
        scanf("%d %d", &n, &x);
        int door[10];   
        int l = -1, r = -1;

        for (int i = 0; i < n; i++) {
            scanf("%d", &door[i]);
            if (door[i] == 1) {
                if (l == -1) l = i;  
                r = i;            
            }
        }

        if (r - l + 1 <= x)
            printf("YES\n");
        else
            printf("NO\n");
    }

    return 0;
}

6)Remove Card
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

  int T;
    scanf("%d", &T);

    while (T--) {
        int N;
        scanf("%d", &N);
        int freq[11] = {0}; 
        int num, i;
        for (i = 0; i < N; i++) {
            scanf("%d", &num);
            freq[num]++;
        }
       int maxFreq = 0;
        for (i = 1; i <= 10; i++) {
            if (freq[i] > maxFreq) {
                maxFreq = freq[i];
            }
        }

        int minMoves = N - maxFreq;
        printf("%d\n", minMoves);
    }
    return 0;
}

