using AuthorApp.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace AuthorApp.Services
{
    public class loginServiceImp : IloginService
    {
        BookAppContext db;
        private IConfiguration _config;

        public loginServiceImp(IConfiguration config, BookAppContext _db)
        {
            _config = config;
            db = _db;
        }
        public async Task<string> Login(TblLogin login, bool IsRegister)
        {
            string str = string.Empty;
            var tokenString = str;
            try
            {
                var userdata = AuthenticateUser(login, IsRegister);
                if (login != null)
                {
                    tokenString = GenerateToken(userdata);
                    return tokenString;
                }
                return tokenString;
            }
            catch (Exception ex)
            {
                return tokenString;
            }
        }

        private TblLogin AuthenticateUser(TblLogin login, bool IsRegister)
        {
            if (IsRegister)
            {
                db.TblLogins.Add(login);
                db.SaveChanges();
                return login;
            }
            else
            {
                if (db.TblLogins.Any(x => x.UserName == login.UserName && x.Password == login.Password))
                {
                    return db.TblLogins.Where(x => x.UserName == login.UserName && x.Password == login.Password).FirstOrDefault();
                }
                else
                {
                    return null;
                }
            }
        }
        private string GenerateToken(TblLogin login)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var token = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, login.Id.ToString()),
                    new Claim(ClaimTypes.Role, login.UserName)
                }),
                Expires = DateTime.Now.AddMinutes(120),
                SigningCredentials = credentials
            };
            var TokenHandler = new JwtSecurityTokenHandler();
            var tokenGenerated = TokenHandler.CreateToken(token);
            return TokenHandler.WriteToken(tokenGenerated).ToString();
        }

        public async Task<string> Register(TblLogin login, bool IsRegister)
        {
            string str = string.Empty;
            var tokenString = str;
            try
            {
                var userdata = AuthenticateUser(login, IsRegister);
                if (login != null)
                {
                    tokenString = GenerateToken(userdata);
                    return tokenString;
                }
                return tokenString;
            }
            catch (Exception ex)
            {
                return tokenString;
            }


        }


    }
}
