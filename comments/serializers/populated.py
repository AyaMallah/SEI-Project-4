from comments.models import Comment
from jwt_auth.serializer import UserSerializer
from .common import CommentSerializer


class PopulatedCommentSerializer(CommentSerializer):
    owner = UserSerializer()
