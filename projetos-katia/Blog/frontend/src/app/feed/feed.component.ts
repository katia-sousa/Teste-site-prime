import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'] // Corrigido de "styleUrl" para "styleUrls"
})
export class FeedComponent implements OnInit {
  listPost: Post[] = [];
  post: Post = new Post(); // Inicializado corretamente

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(): void {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.listPost = data;
    });
  }

  cadastrarMensagem(): void {
    this.postService.postMensagem(this.post).subscribe((data: Post) => {
      this.post = data;
      
      // Opcional: Adicionar a postagem recém-criada à lista de postagens e atualizar
      location.assign('/feed')

    });
  }
}
