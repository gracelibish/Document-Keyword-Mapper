namespace PromoDocKeyWordEF
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SampleDBModel : DbContext
    {
        public SampleDBModel()
            : base("name=SampleDBModelConnStr")
        {
        }

        public virtual DbSet<PromoDocKeyWord> PromoDocKeyWords { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PromoDocKeyWord>()
                .Property(e => e.PromoDocName)
                .IsUnicode(false);

            modelBuilder.Entity<PromoDocKeyWord>()
                .Property(e => e.SKU)
                .IsUnicode(false);

            modelBuilder.Entity<PromoDocKeyWord>()
                .Property(e => e.Keywords)
                .IsUnicode(false);

        }
    }
}
