import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest, TokenResponse } from 'src/app/interfaces/auth';

const TOKEN_KEY = 'auth_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenUrl = `${environment.keycloakUrl}/realms/${environment.realm}/protocol/openid-connect/token`;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: LoginRequest): Observable<TokenResponse> {
    const body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('client_id', environment.clientId);
    body.set('username', credentials.username);
    body.set('password', credentials.password);

    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post<TokenResponse>(this.tokenUrl, body.toString(), { headers }).pipe(
      tap((res) => localStorage.setItem(TOKEN_KEY, res.access_token))
    );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
