from comments.serializers.populated import PopulatedCommentSerializer
from .common import PlantSerializer
from jwt_auth.serializer import UserSerializer


class PopulatedPlantSerializer(PlantSerializer):
    comments = PopulatedCommentSerializer(many=True)
    owner = UserSerializer()
