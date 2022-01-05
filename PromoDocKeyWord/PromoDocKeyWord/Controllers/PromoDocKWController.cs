using PromoDocKeyWord.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Results;

namespace PromoDocKeyWord.Controllers
{
    public class PromoDocKWController : ApiController
    {
        PromoDocKeyWordEF.SampleDBModel sampleDBModel = new PromoDocKeyWordEF.SampleDBModel();

        // GET api/<controller>
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(sampleDBModel.PromoDocKeyWords.Select(x => new PromoDocKWViewModel { Keywords = x.Keywords, PromoDocId = x.PromoDocId, PromoDocName = x.PromoDocName, SKU = x.SKU, SKUId = x.SKUId }).ToList());

            }
            catch (Exception) { throw; }
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id)
        {
            try
            {
                var result = sampleDBModel.PromoDocKeyWords.Where(x => x.PromoDocId == id).FirstOrDefault();
                return Ok( new PromoDocKWViewModel { Keywords = result.Keywords, PromoDocId = result.PromoDocId, PromoDocName = result.PromoDocName, SKU = result.SKU, SKUId = result.SKUId });

            }
            catch (Exception) { throw; }
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]PromoDocKWViewModel value)
        {
            try
            {
                if(value.PromoDocId > 0)
                {
                    return Edit(value.PromoDocId, value);
                }
                PromoDocKeyWordEF.PromoDocKeyWord dbPromoDocKW = new PromoDocKeyWordEF.PromoDocKeyWord() { Keywords = value.Keywords, PromoDocName = value.PromoDocName, SKU = value.SKU, SKUId = value.SKUId };
                sampleDBModel.PromoDocKeyWords.Add(dbPromoDocKW);
                sampleDBModel.SaveChanges();
                return Ok();
            }
            catch(Exception)
            {
                throw;
            }
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(long id, [FromBody]PromoDocKWViewModel value)
        {
            try
            {
                return Edit(id, value);
            }
            catch (Exception)
            { throw; }
        }

        private IHttpActionResult Edit(long id, PromoDocKWViewModel value)
        {
            PromoDocKeyWordEF.PromoDocKeyWord editModel = sampleDBModel.PromoDocKeyWords.Find(id);
            if (editModel != null)
            {
                editModel.Keywords = value.Keywords;
                sampleDBModel.SaveChanges();
                return Ok();
            }
            else
                return NotFound();
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {

        }
    }
}