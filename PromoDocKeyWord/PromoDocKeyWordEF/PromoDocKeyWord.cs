namespace PromoDocKeyWordEF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("PromoDocKeyWord")]
    public partial class PromoDocKeyWord
    {
        [Key]
        public long PromoDocId { get; set; }

        [Required]
        [StringLength(100)]
        public string PromoDocName { get; set; }

        public long SKUId { get; set; }

        [Required]
        [StringLength(50)]
        public string SKU { get; set; }

        public string Keywords { get; set; }
    }
}
