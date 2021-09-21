from django.db import models

# Create your models here.


class Plant(models.Model):
    category_choices = (
        (1, ("General")),
        (2, ("Help")),
        (3, ("Decor"))
    )
    title = models.CharField(max_length=100, default=None)
    cover_image = models.CharField(max_length=150, default=None)
    description = models.CharField(max_length=600, default=None)
    category = models.IntegerField(choices=category_choices, default=1)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="plants",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f"{self.title}"
