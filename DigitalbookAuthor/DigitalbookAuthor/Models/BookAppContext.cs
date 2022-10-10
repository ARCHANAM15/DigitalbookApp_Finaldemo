using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace DigitalbookAuthor.Models
{
    public partial class BookAppContext : DbContext
    {
        public BookAppContext()
        {
        }

        public BookAppContext(DbContextOptions<BookAppContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Books { get; set; }
        public virtual DbSet<BookDetail> BookDetails { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Ordertbl> Ordertbls { get; set; }
        public virtual DbSet<TblLogin> TblLogins { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=CTSDOTNET173; Initial Catalog=BookApp;User ID=sa;Password=pass@word1;Integrated Security=False");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("Book");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Active).HasMaxLength(50);

                entity.Property(e => e.Author).HasMaxLength(50);

                entity.Property(e => e.AuthorId).HasMaxLength(50);

                entity.Property(e => e.Category).HasMaxLength(50);

                entity.Property(e => e.Content).HasMaxLength(50);

                entity.Property(e => e.ImageUrl).HasMaxLength(50);

                entity.Property(e => e.Price).HasMaxLength(50);

                entity.Property(e => e.Publisher).HasMaxLength(50);

                entity.Property(e => e.ReleasedDate).HasMaxLength(50);

                entity.Property(e => e.Title).HasMaxLength(50);
            });

            modelBuilder.Entity<BookDetail>(entity =>
            {
                entity.ToTable("BookDetail");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Active).HasMaxLength(50);

                entity.Property(e => e.Author).HasMaxLength(50);

                entity.Property(e => e.AuthorId).HasMaxLength(50);

                entity.Property(e => e.Category).HasMaxLength(50);

                entity.Property(e => e.ImageUrl).HasMaxLength(50);

                entity.Property(e => e.Price).HasMaxLength(50);

                entity.Property(e => e.Publisher).HasMaxLength(50);

                entity.Property(e => e.ReleasedDate).HasMaxLength(50);

                entity.Property(e => e.Title).HasMaxLength(50);
            });

            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Order");

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.BookId)
                    .HasMaxLength(50)
                    .HasColumnName("bookId");

                entity.Property(e => e.Booktitle)
                    .HasMaxLength(50)
                    .HasColumnName("booktitle");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.PaymentMethod).HasMaxLength(50);

                entity.Property(e => e.Reader).HasMaxLength(50);

                entity.Property(e => e.Title).HasMaxLength(50);
            });

            modelBuilder.Entity<Ordertbl>(entity =>
            {
                entity.ToTable("Ordertbl");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.BookId).HasColumnName("bookId");

                entity.Property(e => e.Booktitle)
                    .HasMaxLength(50)
                    .HasColumnName("booktitle");

                entity.Property(e => e.OrderStatus)
                    .HasMaxLength(50)
                    .HasColumnName("orderStatus");

                entity.Property(e => e.PaymentMethod)
                    .HasMaxLength(50)
                    .HasColumnName("paymentMethod");
            });

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("TblLogin");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Password).HasMaxLength(50);

                entity.Property(e => e.UserName).HasMaxLength(50);

                entity.Property(e => e.UserType).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
