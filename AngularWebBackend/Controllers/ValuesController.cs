using AngularWebBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebBackend.Controllers
{
    public class ValuesController : ApiController
    {
        [HttpGet]
        [Route("api/values/OrderCount")]
        public int OrderCount()
        {
            northwindEntities entities = new northwindEntities();
            int orderCount = entities.Orders.Count();
            entities.Dispose();
            return orderCount;
        }

        [HttpGet]
        [Route("api/values/LastNOrders/{id:int}")]
        public List<string> LastNOrders(int id)
        {
            northwindEntities entities = new northwindEntities();
            int numberOfOrdersToReturn = id;
            List<Order> lastOrders = (from o in entities.Orders
                                      orderby o.OrderDate descending
                                      select o).Take(numberOfOrdersToReturn).ToList();

            List<string> customerNames =
                lastOrders.Select(o => o.Customer.CompanyName).ToList();

            entities.Dispose();
            return customerNames;
        }
    }
}