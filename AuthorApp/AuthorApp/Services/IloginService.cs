using AuthorApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthorApp.Services
{
   public interface IloginService
    {
        Task<string> Login(TblLogin login, bool IsRegister);
        Task<string> Register(TblLogin login, bool IsRegister);
    }
}
