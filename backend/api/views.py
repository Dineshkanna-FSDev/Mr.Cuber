from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import kociemba
# Create your views here.
@api_view(["GET","POST"])
def SolutionViews(request):
    if request.method== "POST":
        up=request.data.get('up')
        right=request.data.get('right')
        front=request.data.get('front')
        down=request.data.get('down')
        left=request.data.get('left')
        back=request.data.get('back')
       
        user_data=up+right+front+down+left+back
        
        try:
            solution = kociemba.solve(user_data)
            return Response({"solution": solution}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    return Response({"message": "Send a POST request with cube_string"})    