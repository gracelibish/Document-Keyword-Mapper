using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PromoDocKeyWord.Models
{
    public class PromoDocKWViewModel
    {
        public long PromoDocId { get; set; }

        public string PromoDocName { get; set; }

        public long SKUId { get; set; }

        public string SKU { get; set; }

        public string Keywords { get; set; }
    }
}