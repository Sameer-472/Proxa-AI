import { useGetPlans } from "@/api/planApi";
import CreatePlanForm from "@/components/Admin/CreatePlanForm";
import PaymentCardComponents from "@/components/Admin/PaymenCardComponents";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { addPlan } from "@/redux/slice/planSlice";
import { useEffect } from "react";


export default function CreatePlan() {
  const { data: planData } = useGetPlans();

  const dispatch = useAppDispatch();
  const { plans } = useAppSelector((state) => state.plans);

  useEffect(() => {
     if (planData && planData.data) {
    dispatch(addPlan(planData.data)); 
  }
  }, [planData, dispatch]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">Create Payment Plan</h1>
          <CreatePlanForm />
      </div>

      <div>
       {
        plans && plans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {plans.map((plan, index) => (
              <PaymentCardComponents key={index} plan={plan} />
            ))}
          </div>
        ) : (
          <p>No plans available</p>
        )}
      </div>
    </div>
  )
}
